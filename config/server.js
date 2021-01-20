module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron:{
    enabled:true
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '595195a9f11fab8f655ba6f1a42500ad'),
    },
  },
});
