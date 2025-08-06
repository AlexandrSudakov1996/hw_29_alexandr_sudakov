
import UserAvatar from "./UserAvatar.tsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/twitterContext.ts";




const UserStats = () => {
    const {user, stats, changeName,changeStat} = useContext(TwitterContext)
    return (
        <div className={"user-stats"}>
            <UserAvatar/>
            <p
            onClick={() => changeName(prompt("Enter new nickname") as string)}
            >{user.name}</p>
            <div className={"stats"}>
                <div className={"fol"}
                    onClick={() => changeStat('followers', 1)}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        changeStat('followers', -1);
                    }}
                >
                    Followers: {stats.followers}
                </div>


                <div className={"sub"}
                    onClick={() => changeStat('subscribers', 1)}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        changeStat('subscribers', -1);
                    }}
                >
                    Subscribers: {stats.subscribers}
                </div>
            </div>
        </div>
    );
};

export default UserStats;