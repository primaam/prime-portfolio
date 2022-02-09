import React, { useState } from 'react';
import imgBack from '../../assets/images/mailz.jpeg';
import imgLoad from '../../assets/images/load2.gif';
import axios from 'axios';
import { toast } from 'react-toastify';

import Typical from "react-typical";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/scrollService';
import Animations from '../../utilities/animations';
import './ContactMe.css';



export default function ContactMe(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreens(props.id);
    };
    const fadeInSubscription = ScrollService.cureentScreenFadeIn._subscribe(fadeInScreenHandler);


    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            let data = {
                name,
                email,
                message,
            };
            setBool(true);
            const res = await axios.post(`/contact`, data);
            console.log("data", res.data);
            if (name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg);
                // toast.error("please fill all the fields");
                toast.error(res.data.msg);
                setBool(false);
            } else if (res.status === 200) {
                console.log(banner, "banner");
                setBanner(res.data.msg);
                toast.success(res.data.msg);
                setBool(false);

                setName("");
                setEmail("");
                setMessage("");
            }
        } catch (error) {
            console.log("error", error);
        }


    };
    return (
        <div className="main-container" id={props.id || ""}>
            <ScreenHeading
                subHeading={"Lets Connect"}
                title={"Contact Me"}
            />
            <div className="central-form">
                <div className="col">
                    <h2 className="title">
                        {" "}
                        <Typical
                            loop={Infinity}
                            steps={[
                                "Get In Touch",
                                1500,
                                "Lets Make A Connection",
                                1500,
                            ]}
                        />
                    </h2>
                    <a href="https://www.instagram.com/prima.maharyono/">
                        <i className="fa fa-instagram"></i>
                    </a>
                    {/* <a href="#">
                                <i className="fa fa-youtube-square"></i>
                            </a> */}
                    <a href="https://www.linkedin.com/in/primamaharyono/">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/primaam">
                        <i className="fa fa-github"></i>
                    </a>
                </div>
                <div className="back-form">
                    <div className="img-back">
                        <h4>Send Your Message Here!</h4>
                        <img src={imgBack} alt="image not found" />
                    </div>
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor="name" >Name</label>
                        <input type="text" onChange={handleName} value={name} />

                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={handleEmail} value={email} />

                        <label htmlFor="message">Message</label>
                        <textarea type="text" onChange={handleMessage} value={message} />

                        <div className="send-btn">
                            <button type="submit" >
                                send <i className="fa fa-paper-plane" />
                                {bool === true ?
                                    (<b className="load">
                                        <img src={imgLoad} alt="image not responding" />
                                    </b>)
                                    :
                                    ("")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}
