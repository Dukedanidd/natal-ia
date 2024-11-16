import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

// USER SCHEMA
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    image: {
      type: String,
    },
    // Used in the Stripe webhook to identify the user in Stripe and later create Customer Portal or prefill user credit card details
    customerId: {
      type: String,
      validate(value) {
        return value.includes("cus_");
      },
    },
    // Used in the Stripe webhook. should match a plan in config.js file.
    priceId: {
      type: String,
      validate(value) {
        return value.includes("price_");
      },
    },
    // Used to determine if the user has access to the product—it's turn on/off by the Stripe webhook
    hasAccess: {
      type: Boolean,
      default: false,
    },
    // Add role field
    role: {
      type: String,
      enum: ["user", "admin", "editor", "moderator"], // Define allowed roles
      default: "user", // Set default role
      required: true,
    },
    lastLogin: {
      type: Date,
      default: null,
    },
    // Nuevo campo para almacenar el historial de llamadas
    callHistory: [
      {
        date: {
          type: Date,
          default: Date.now,
        },
        emotionalState: {
          type: String,
          enum: ["frustrado", "triste", "estresado", "burnout"], // Asegúrate de que coincida con los estados emocionales
        },
        messages: [
          {
            sender: {
              type: String,
              enum: ["user", "assistant"], // Define quién envió el mensaje
              required: true,
            },
            text: {
              type: String,
              required: true,
            },
            timestamp: {
              type: Date,
              default: Date.now,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);

// Optional: Add methods to check roles
userSchema.methods.hasRole = function (role) {
  return this.role === role;
};

userSchema.methods.isAdmin = function () {
  return this.role === "admin";
};

export default mongoose.models.User || mongoose.model("User", userSchema);
