"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        emailjs
            .sendForm(
                "service_zaiq8p5",   // replace
                "template_ziw74eq",  // replace
                form.current,
                "user_fA3a0O2Kos8ITxSKS3Tey"    // replace
            )
            .then(
                () => {
                    setLoading(false);
                    setStatus("success");
                    form.current.reset();
                },
                () => {
                    setLoading(false);
                    setStatus("error");
                }
            );
    };

    return (
        <div>
            <div className="col-11 m-auto text-center">
                <p className="fs-1 fw-bold">Contact Me</p>
                <p className="fs-5">Let's build something amazing together 🚀</p>

                <form className="col-lg-6 col-md-6 col-12 m-auto text-start" ref={form} onSubmit={sendEmail}>
                    <div className=" mt-3">
                        <label>Your Name</label>
                        <input className="form-control" type="text" name="name" required />
                    </div>

                    <div className=" mt-3">
                        <label>Your Email</label>
                        <input className="form-control" type="email" name="email" required />
                    </div>

                    <div className=" mt-3 ">
                        <label>Your Message</label>
                        <textarea className="form-control" name="message" rows="5" required />
                    </div>
                    <br />

                    {status === "success" && (
                        <p className="text-success text-center mt-3">Message sent successfully ✅</p>
                    )}
                    {status === "error" && (
                        <p className="text-danger text-center mt-3">Something went wrong ❌</p>
                    )}
                    <button className="btn-light w-100" type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                </form>
            </div>

            <div className="col-11 m-auto row mt-5 align-items-center gap-md-0 gap-5">
                <div className="col-md-5 col-12">
                    <div className="mt-3">
                        <p className="fs-4 fw-bold">Name :</p>
                        <p className="fs-5">Kamesh Hedau</p>
                    </div>
                    <div className=" mt-3">
                        <p className="fs-4 fw-bold">Email :</p>
                        <p className="fs-5">kameshhedau19@gmail.com</p>
                    </div>
                     <div className=" mt-3">
                        <p className="fs-4 fw-bold">Phone :</p>
                        <p className="fs-5">+91 8109152546</p>
                    </div>
                    <div className=" mt-3">
                        <p className="fs-4 fw-bold">Location :</p>
                        <p className="fs-5">Bengluru, Karnataka</p>
                    </div>
                </div>
                <div className="col-md-7 col-12">
                    <div style={{width:"100%", overflow:"hidden", borderRadius:"15px"}}>

                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.9311251218!2d77.65419089532236!3d12.932359166343161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13752e34e92f%3A0xc2b234a66f986aae!2sBellandur%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1774197671805!5m2!1sen!2sin" className="map" height="450"    loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>
        </div>
    );
}