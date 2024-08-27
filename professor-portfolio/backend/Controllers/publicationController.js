import publications from "../Models/publishmentModel.js";

export const publish = async (req, res) => {
  const {
    image,
    title,
    category,
    publicationdate,
    shortdescription,
    longdescription,
  } = req.body;
  try {
    const addPublication = new publications({
      image,
      title,
      category,
      publicationdate,
      shortdescription,
      longdescription,
    });
    const newPublications = await addPublication.save();
    res.status(200).json(newPublications)
  } catch (error) {
    res.status(400).json({message:"error in publishing the data"})
  }
};
