const config = {
  // REQUIRED
  appName: "Escuelita Starter",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Escuelita Starter is a template to start creating your own projects FAST",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "escuelitamaker.com",
  email: {
    supportEmail: "escuelitamaker@gmail.com",
    noReplyEmail: "no-reply@escuelitamaker.com",
  },
  socials: {
    twitter: "https://twitter.com/escuelitamaker",
    youtube: "https://www.youtube.com/@escuelitamaker",
    facebook: "https://www.facebook.com/escuelitamaker",
    instagram: "https://www.instagram.com/escuelitamaker",
    linkedin: "https://www.linkedin.com/company/escuelitamaker",
    tiktok: "https://www.tiktok.com/@escuelita.maker",
    github: "https://github.com/escuelitamaker",
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/auth/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Starter",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Perfect for small projects",
        // The price you want to display, the one user will be charged on Stripe.
        price: 79,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 99,
        features: [
          {
            name: "NextJS boilerplate",
          },
          { name: "User oauth" },
          { name: "Database" },
          { name: "Emails" },
        ],
      },
      {
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "Advanced",
        description: "You need more power",
        price: 99,
        priceAnchor: 149,
        features: [
          {
            name: "NextJS boilerplate",
          },
          { name: "User oauth" },
          { name: "Database" },
          { name: "Emails" },
          { name: "1 year of updates" },
          { name: "24/7 support" },
        ],
      },
    ],
  },
};

export default config;
