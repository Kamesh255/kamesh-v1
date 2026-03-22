"use client";

import { SiGithub, SiLeetcode } from "react-icons/si";

const CodeStats = () => {
    return (
        <div className="col-11 m-auto mt-5 text-center">
            <p className="fs-1 fw-bold">Code & Contributions</p>
            {/* <p className="fs-5">Tracking my coding activity and continuous learning</p> */}

            <div className="row mt-3 gap-md-0 gap-5 ">
                <div className="col-md-6 p-2 text-start">
                    <p>Github <span><SiGithub /></span> :  <b>Kamesh255</b></p>

                    <img
                        style={{ width: "100%" }}
                        src="https://github-readme-streak-stats.herokuapp.com/?user=Kamesh255&theme=default"   // tokyonight -> dark, 
                        alt="github streak"
                    />
                </div>
                <div className="col-md-6 p-2 text-start">
                    <p>LeetCode <span><SiLeetcode /></span> : <b>kamesh255</b></p>
                    <img
                        style={{ width: "100%" }}
                        src="https://leetcard.jacoblin.cool/kamesh255?theme=light&font=Baloo" //dark - > dark
                        alt="leetcode stats"
                    />
                </div>
            </div>
        </div>
    );
};

export default CodeStats;