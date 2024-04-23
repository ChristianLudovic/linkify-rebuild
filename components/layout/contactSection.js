import Button from "../basis/button";

export default function ContactSection() {
    return (
        <>
            <div className="flex items-start gap-24 px-36 py-28 contactSection-wrapper">
                <div>
                    <p
                        className="text-sm w-36"
                        style={{
                            color: "#ededed",
                            fontWeight: "500",
                            
                        }}
                    >Let’s Cook Together</p>
                </div>
                <div className="flex flex-col gap-7 items-start contact-text-conatiner">
                    <h2
                        className="contact-title"
                    >Ready to turn your ideas into exceptional websites or web applications? Contact us today, and let's make something amazing together!</h2>
                    <Button 
                        const children = "Let's Talk"
                        className="px-8 py-2 border border-solid rounded text-sm"
                        style= {
                            { 
                                backgroundColor: "#37996B", 
                                color: "#fff",
                                borderColor: "#3ECF8E"
                            }}  
                    />
                </div>
            </div>
        </>
    )
}