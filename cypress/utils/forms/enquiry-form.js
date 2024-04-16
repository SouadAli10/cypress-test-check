/// we can use this to automate filling the form 
const enquiryForm = ()=> {
    return [
        {
            id: 'Title',
            required: true,
            options: ['Mr', 'Mrs', 'Ms', 'Dr'],
            type: 'selector',
            error_message: 'Please select your title' //localization is needed for this at some point 
        },
        {
            id: 'FirstName',
            required: true,
            type: 'text',
            error_message: 'Please enter your first name' //localization is needed for this at some point 
        },
        {
            id: 'LastName',
            required: true,
            type: 'text',
            error_message: 'Please enter your last name' //localization is needed for this at some point 
        },
        {
            id: 'Phone',
            required: false,
            type: 'phone'
        },
        {
            id: 'Email',
            required: true,
            type: 'email',
            error_message: 'Please enter your email address' //localization is needed for this at some point 
        },
        {
            id: 'AdditionalComments',
            required: false,
            type: 'text'
        },
    ]
}

export default enquiryForm;