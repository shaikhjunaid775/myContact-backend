const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModels");

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async(req,res)=>{
    const contact = await Contact.find();
    res.status(200).json(contact);
});


//@desc create  new contacts
//@route GET /api/contacts
//@access public

const createContact = asyncHandler(async(req,res)=>{
    console.log("The req body is " , req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required !");
    }

    const contact = await Contact.create({
        name : name,
        email : email,
        phone : phone
    })
    res.json(contact);
});

//@desc get contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found !")
    }

    res.status(200).json(contact)
});

//@desc update contacts
//@route GET /api/contacts/:id
//@access public

const updateContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found !");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
        );
    res.status(200).json(updatedContact);
});

//@desc delete contacts
//@route GET /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async(req,res)=>{
    res.json({message: `This is delete contact for ${req.params.id}`});
});



module.exports = {getContacts , createContact , getContact, updateContact,
    deleteContact}