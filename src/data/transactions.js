
import moment from "moment-timezone";

export default [
    {
        "invoiceNumber": 300500,
        "status": "Accepter",
        "subscription": "ANJARASOA Bernardin",
        "price": "799,00",
        "issueDate": moment().subtract(1, "days").format("DD MMM YYYY"),
        "dueDate": "IT"
    },
  
   
    {
        "invoiceNumber": 300497,
        "status": "Accepter",
        "subscription": "Doria Robison",
        "price": "233,42",
        "issueDate": moment().subtract(3, "days").format("DD MMM YYYY"),
        "dueDate": "SAV"
    },
    {
        "invoiceNumber": 300496,
        "status": "Attente",
        "subscription": "Steve Rakoto",
        "price": "533,42",
        "issueDate": moment().subtract(1, "day").subtract(1, "month").format("DD MMM YYYY"),
        "dueDate": "SAV"
    },
    {
        "invoiceNumber": 300495,
        "status": "Attente",
        "subscription": "Leonie",
        "price": "533,42",
        "issueDate": moment().subtract(3, "days").subtract(1, "month").format("DD MMM YYYY"),
        "dueDate": "SAV"
    },
    {
        "invoiceNumber": 300494,
        "status": "Attente",
        "subscription": "Johanne Ferrari",
        "price": "233,42",
        "issueDate": moment().subtract(4, "days").subtract(1, "month").format("DD MMM YYYY"),
        "dueDate": "FTD"
    },
    {
        "invoiceNumber": 300493,
        "status": "Refusé",
        "subscription": "Thierry Patel",
        "price": "533,42",
        "issueDate": moment().subtract(20, "days").subtract(1, "month").format("DD MMM YYYY"),
        "dueDate": "FTD"
    },
    {
        "invoiceNumber": 300492,
        "status": "Refusé",
        "subscription": "Honorine",
        "price": "799,00",
        "issueDate": moment().subtract(2, "months").format("DD MMM YYYY"),
        "dueDate": "DRH"
    },
    {
        "invoiceNumber": 300491,
        "status": "Accepter",
        "subscription": "Elros Ravao",
        "price": "799,00",
        "issueDate": moment().subtract(6, "days").format("DD MMM YYYY"),
        "dueDate": "FTD"
    }
]