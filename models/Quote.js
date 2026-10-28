import mongoose from 'mongoose';

const quoteScheme = new mongoose.Schema({
    quoteNumber: {
        type: String,
        required: true,
        unique: true
    },
    clientName: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    // Array of parts included in this spedific quote
      items: [{
        partId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Part',
            required: true 
        },
        quotedPrice: {
            type: Number,
            required: true // Locks in the price at the time of quoting
        },
        subtotal: {
            type: Number,
            required: true 
        }
      }],
      totalAmount: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        enum: ['Draft', 'Sent', 'Accepted', 'Rejected'],
        default: 'Draft'
      },
      ValidUntil: {
        type: Date,
        required: true 
      }},{
        timestamps: true
})

const Quote = mongoose.model('Quote', quoteSchema)
export default Quote;