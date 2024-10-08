import '../css/ContactForm.css'

export default function ContactForm() {
    return (
        <>
            <div className="formbold-main-wrapper">
                <h1>Get In Touch</h1>
                <div className="formbold-form-wrapper">
                    <form>
                        <div className="formbold-input-flex">
                            <div>
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    placeholder="Kiruthihashree"
                                    className="formbold-form-input"
                                />
                                <label htmlFor="firstname" className="formbold-form-label"> First name </label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    placeholder="S"
                                    className="formbold-form-input"
                                />
                                <label htmlFor="lastname" className="formbold-form-label"> Last name </label>
                            </div>
                        </div>

                        <div className="formbold-input-flex">
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="jhon@mail.com"
                                    className="formbold-form-input"
                                />
                                <label htmlFor="email" className="formbold-form-label"> Mail </label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="0300 00000000"
                                    className="formbold-form-input"
                                />
                                <label htmlFor="phone" className="formbold-form-label"> Phone </label>
                            </div>
                        </div>

                        <div className="formbold-textarea">
                            <textarea
                                rows="6"
                                name="message"
                                id="message"
                                placeholder="Write your message..."
                                className="formbold-form-input"
                            ></textarea>
                            <label htmlFor="message" className="formbold-form-label"> Message </label>
                        </div>

                        <a href="/" className="formbold-btn">Send Message</a>
                    </form>
                </div>
            </div>
        </>
    )
}
