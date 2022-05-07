import React from "react"

export default function Acoes() {
    const [like, setLike] = React.useState("heart-outline");
    const [color, setColor] = React.useState("black");

    function LikePost() {
        setLike("heart");
        setColor("red");
        if(like === "heart") {
            setColor("black");
            setLike("heart-outline");
        }
    }

    return (
        <div class="acoes">
            <div>
                <ion-icon name={like} Style={"color:" + color} onClick={LikePost}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>

    )
} 