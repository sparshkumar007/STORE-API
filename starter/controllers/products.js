const getallproductStatic = async (req, res) => {
    throw new Error("testing async errors");
    res.status(200).json({ msg: "products testing route" });
};

const getallproduct = async (req, res) => {
    res.status(200).json({ msg: "products route" });
};

module.exports = { getallproduct, getallproductStatic };
