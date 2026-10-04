import React from 'react'

const AboutMe = ({ myInfo, myName }) => {

    return (
        <div className="aboutContainer">

            <h2 className="HeadingSec">About Me</h2>

            <table className="aboutTable">

                <tbody>

                   
                    <tr>
                        <th>Name</th>
                        <td>{myName.name}</td>
                    </tr>

                   
                    <tr>
                        <th>Skills</th>
                        <td>
                            {myInfo.skills.map((s, i) => (
                                <span key={i}>
                                    {s}
                                    {i !== myInfo.skills.length - 1 && ", "}
                                </span>
                            ))}
                        </td>
                    </tr>

                    <tr>
                        <th>Technologies</th>
                        <td>
                            {Object.entries(myInfo.technologies).map(
                                ([cate, values]) => (
                                    <div key={cate} className="techRow">
                                        <strong>{cate} :</strong>
                                        <span>
                                            {values.map((e, i) => (
                                                <span key={i}>
                                                    {e}
                                                    {i !== values.length - 1 && ", "}
                                                </span>
                                            ))}
                                        </span>
                                    </div>
                                )
                            )}
                        </td>
                    </tr>

                    <tr>
                        <th>Development Areas</th>
                        <td>
                            {myInfo.developmentAreas.map((e, i) => (
                                <span key={i}>
                                    {e}
                                    {i !== myInfo.developmentAreas.length - 1 && ", "}
                                </span>
                            ))}
                        </td>
                    </tr>

                  
                    <tr>
                        <th>Interests</th>
                        <td>
                            {myInfo.interests.map((e, i) => (
                                <span key={i}>
                                    {e}
                                    {i !== myInfo.interests.length - 1 && ", "}
                                </span>
                            ))}
                        </td>
                    </tr>

                </tbody>

            </table>

        </div>
    )
}

export default AboutMe



