const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),

    image: Joi.object({
      filename: Joi.string().allow("", null),
      url: Joi.string().allow("", null),
    }).optional(),

    location: Joi.string().required(),
    country: Joi.string().required(),

    price: Joi.number().min(0).required(),

    geometry: Joi.object({
      type: Joi.string().valid("Point").required(),
      coordinates: Joi.array()
        .items(Joi.number().min(-180).max(180), Joi.number().min(-90).max(90))
        .length(2)
        .required(),
    }).optional(),

    category: Joi.string()
      .valid(
        "trending",
        "rooms",
        "iconic_cities",
        "mountains",
        "castles",
        "arctic",
        "camping",
        "farms",
        "domes",
        "boats",
      )
      .optional(),
  })
    .required()
    .unknown(false),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});

// Filters (e.g., query params for listing index)
module.exports.filterSchema = Joi.object({
  category: Joi.string()
    .valid(
      "trending",
      "rooms",
      "iconic_cities",
      "mountains",
      "castles",
      "arctic",
      "camping",
      "farms",
      "domes",
      "boats",
    )
    .optional(),
}).unknown(true);
