const e = require('express');
const CashRegister = require ('../models/CashRegister')

exports.addEntry = async (req , res )=>{
    const {denomination, quantity} = req.body;
    try{
        const newEntry = new CashRegister({
            user:req.user.id,
            denomination,
            quantity
        });
        await newEntry.save();
        res.json(newEntry)
    }catch (err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getSummary = async(req , res)=>{

    try{
        const entries = await CashRegister.find({user: req.user.id});
        const summary = entries.reduce((acc ,entry )=>{
            const value = parseFloat(entry.denomination);
            return acc + (value*entry.quantity);
        },0);
        res.json({Total: summary });
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');

    }
};