import React from 'react'

const UserOutput = (props) => {

    const styleOutputName = {
        fontFamily: 'fantasy',
        fontSize: '18px'
    };

    const styleOutput = {
        fontFamily: 'monospace',
        fontSize: '15px',
        textAlign: 'justify',
        padding: '100px'
    };


    return (
        <div className="UserOutput">
            <p style={styleOutputName}>This is the first paragraph from {props.username} </p>
            <p style={styleOutput}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis arcu neque. Cras euismod, odio at
                dictum efficitur, velit erat porttitor tortor, sit amet malesuada nibh dui ut tortor. In vitae maximus
                enim. Duis in condimentum risus. Phasellus aliquet nibh id ligula placerat aliquam. Nullam aliquam
                ullamcorper magna eget interdum. Aenean tincidunt sed ligula eu tincidunt. Morbi vel varius magna, vitae
                porta tortor. Phasellus eget quam nec eros mattis ullamcorper. Vivamus semper, libero ut gravida
                condimentum, libero arcu interdum purus, quis rutrum diam erat nec magna. Suspendisse potenti. Duis ac
                nisi in est iaculis aliquet. Duis ornare dictum justo eget volutpat. Aenean faucibus ex nec augue
                finibus mollis. Morbi id tortor interdum, maximus eros eu, efficitur mauris. Proin semper diam massa,
                at fermentum magna mollis et.
            </p>
            <hr/>
        </div>
    )

};

export default UserOutput;