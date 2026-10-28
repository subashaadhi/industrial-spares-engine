import Part from '../models/Parts.js'

// @desc Create a new spare part 
// @route POST /api/parts
export const createPart = async (req, res) => {
    try {
        const { partNumber, name, category, price, stock, minStockLevel } = req.body;

        // check if part already exists
        const partExists = await Part.findOne({ partNumber })
        if (partExists) {
            return res.status(400).json({ message: 'Part number already exists' });
        }

        const part = await Part.create({
            partNumber, name, category, price, stock, minStockLevel
        });

        res.status(201).json(part);

    }

    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// @desc Get all parts (Inventory View) 
// @route GET /api/parts 
export const getParts = async (req, res) => {
    try {

        //find all parts, sort by newest first
        const parts = await Part.find({}).sort({ createdAt: -1 });
        res.status(200).json(parts);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

// @desc update part details (e.g. adding stock or changing price)

// @route PUT /api/parts/:id

export const updatePart = async (req, res) => {
    try {
        const { price, stock } = req.body
        const part = await Part.findById(req.parems.id);

        if (part) { // only update fields if they are provided in the request
            part.price = price !== undefined ? price : part.price;
            part.stock = stock !== undefined ? stock : part.stock;


            const updatedPart = await part.save();
            res.status(200).json(updatedPart);
        } else {
            res.status(404).json({ message: 'Part not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.messasge})
    }
}