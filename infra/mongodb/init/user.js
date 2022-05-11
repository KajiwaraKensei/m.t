db = db.getSiblingDB("nest_app");
db.createUser({
  user: "app",
  pwd: "app-password",
  roles: [{ role: "readWrite", db: "nest_app" }],
});
