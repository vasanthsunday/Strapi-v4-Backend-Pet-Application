module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5d94216e7cb6e9855f81e4bbedda418b'),
  },
});
