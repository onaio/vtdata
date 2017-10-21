var SUMMARY = {
  IconDirectory: "/assets/img/summary/",
  csvDirectory: "/data/summaryData/",
  csvFilenames: [
    "summaryData-201705.csv",
    "summaryData-201706.csv",
    "summaryData-201707.csv",
    "summaryData-201708.csv",
  ],

  // PARTNERS
  Partners: ["FAO", "UNICEF", "WFP", "BRCiS", "SNS"],

  // PARTNER OPTIONS
  "FAO": {
    color: "#3D4499",
  },
  "UNICEF": {
    color: "#0099FF",
  },
  "WFP": {
    color: "#CC4B14",
  },
  "BRCiS": { 
    color: "#FF9540",
  },
  "SNS": {
    color: "#1422CC",
  },

  // SECTORS
  Sectors: ["Food Security", "Nutrition Services", "Safe Drinking Water", "Emergency Healthcare"],

  "Food Security": {
    iconFilename: "all-food-security-icon.svg",
    csvReference: "",
    metrics: ["Unconditional Cash", "Conditional Cash", "Cash for Work"],

    "Unconditional Cash": {
      iconFilename: "food-unconditional-cash-icon.svg",
      csvReference: "",
    },
    "Conditional Cash": {
      iconFilename: "food-conditional-cash-icon.svg",
      csvReference: "",
    },
    "Cash for Work": {
      iconFilename: "food-cash-for-work-icon.svg",
      csvReference: "",
    },
  },

  "Nutrition Services": {
    iconFilename: "all-nutrition-services-icon.svg",
    metrics: ["Community Based Outreach (Children)", "Severe Malnutrition (SAM)", "Pregnant and Lactating Women (PLW)", "Blanket Supplementary Feeding Programme (BSFP)", "Targeted Supplementary Feeding Programme (TSFP)", "Mother and Child Health and Nutrition (MCHN)",],

    "Community Based Outreach (Children)": {
      iconFilename: "nutrition-community-based-outreach-icon.svg",
      csvReference: "",
    },
    "Severe Malnutrition (SAM)": {
      iconFilename: "nutrition-severe-malnutrition-icon.svg",
      csvReference: "SAM",
    },
    "Pregnant and Lactating Women (PLW)": {
      iconFilename: "nutrition-pregnant-and-lactating-women-icon.svg",
      csvReference: "PLW",
    },
    "Blanket Supplementary Feeding Programme (BSFP)": {
      iconFilename: "nutrition-blanket-supplementary-feeding-programme-icon.svg",
      csvReference: "BSFP",
    },
    "Targeted Supplementary Feeding Programme (TSFP)": {
      iconFilename: "nutrition-targeted-supplementary-feeding-programme-icon.svg",
      csvReference: "TSFP",
    },
    "Mother and Child Health and Nutrition (MCHN)": {
      iconFilename: "nutrition-mother-and-child-health-and-nutrition-icon.svg",
      csvReference: "MCHN",
    },
  },

  "Safe Drinking Water": {
    iconFilename: "all-safe-drinking-water-services-icon.svg",
    metrics: ["Water Trucking", "Vouchers", "Access", "Bore Holes",],

    "Water Trucking": {
      iconFilename: "water-water-trucking-icon.svg",
      csvReference: "",
    },
    "Vouchers": {
      iconFilename: "water-vouchers-icon.svg",
      csvReference: "",
    },
    "Access": {
      iconFilename: "water-access-icon.svg",
      csvReference: "",
    },
    "Bore Holes": {
      iconFilename: "water-bore-holes-icon.svg",
      csvReference: "",
    },
  },
    
  "Emergency Healthcare": {
    iconFilename: "all-emergency-health-services-icon.svg",
    metrics: ["Community Based Outreach (Children)", "General", "Children", "Acute Watery Diarrhoea", "Measles Immunisation", "Emergency Health Kits",],
  
    "Community Based Outreach (Children)": {
      iconFilename: "health-community-based-outreach-icon.svg",
      csvReference: "",
    },
    "General": {
      iconFilename: "health-general-icon.svg",
      csvReference: "",
    },
    "Children": {
      iconFilename: "health-children-icon.svg",
      csvReference: "",
    },
    "Acute Watery Diarrhoea": {
      iconFilename: "health-acute-watery-diarrhoea-icon.svg",
      csvReference: "AWD",
    },
    "Measles Immunisation": {
      iconFilename: "health-measles-immunisation-icon.svg",
      csvReference: "Measles immunisation",
    },
    "Emergency Health Kits": {
      iconFilename: "health-emergency-health-kits-icon.svg",
      csvReference: "",
    }

  },
};