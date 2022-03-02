import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this pet."],
    maxlength: [20, "Name cannot be more than 60 characters"],
  },
});

export default mongoose.models.Income || mongoose.model("Incomes", IncomeSchema);
