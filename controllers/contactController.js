//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req,res)=>{
    res.json({message: "This is All contacts "});
}


//@desc create  new contacts
//@route GET /api/contacts
//@access public

const createContact = (req,res)=>{
    res.json({message: "This is create new contact "});
}

//@desc get contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req,res)=>{
    res.json({message: `This is for ${req.params.id} contact `});
}

//@desc update contacts
//@route GET /api/contacts/:id
//@access public

const updateContact = (req,res)=>{
    res.json({message: `This is update contact for ${req.params.id}`});
}

//@desc update contacts
//@route GET /api/contacts/:id
//@access public

const deleteContact = (req,res)=>{
    res.json({message: `This is delete contact for ${req.params.id}`});
}



module.exports = {getContacts , createContact , getContact, updateContact,
    deleteContact}