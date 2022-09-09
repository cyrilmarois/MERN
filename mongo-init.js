db = db.getSiblingDB("dev");
db.createCollection("portfolio");
db.portfolio.insert({ test: "icule" });
