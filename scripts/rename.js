hexo.extend.filter.register(
  "new_post_path",
  function (args) {
    // modify filename to lowercase
    args.slug = args.slug.toLowerCase();
    // modify date
    args.date.hours(15).minutes(0).seconds(0);
  },
  true,
);
