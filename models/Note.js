const mongoose = require("mongoose");
const { autoIncrement } = require("mongoose-plugin-autoinc");

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      Ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

noteSchema.plugin(autoIncrement, {
  model: "Note",
  field: "noteId",
  startAt: 500,
});

module.exports = mongoose.model("Note", noteSchema);
