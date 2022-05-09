import React  from "react";

export default function Posts() {

    const posts = [
        {
            userSrc:"./assets/img/meowed.svg", 
            userName: "meowed", 
            contentSrc: "./assets/img/gato-telefone.svg",
            likeSrc: "./assets/img/respondeai.svg",
            likeText: "respondeai",
            likeNumber: "101.523",
        },
        {
            userSrc:"./assets/img/barked.svg", 
            userName: "barked", 
            contentSrc: "./assets/img/dog.svg",
            likeSrc: "./assets/img/adorable_animals.svg",
            likeText: "adorable_animals",
            likeNumber: "99.159",
        }
    ];

    return (
        <div class="posts">
           {posts.map((element) => <Post userimg={element.userSrc} username={element.userName} contentimg={element.contentSrc} likesrc={element.likeSrc} liketext={element.likeText} likenumber={element.likeNumber}/>)}
        </div>
    )
};

function Post(props) {

    const [like, setLike] = React.useState("heart-outline");
    const [color, setColor] = React.useState("black");

    function LikePost() {
        setLike("heart");
        setColor("red");
        if(like === "heart") {
            setColor("black");
            setLike("heart-outline");
        };
    };
            
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userimg}/>
                    {props.username}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onClick={LikePost} src={props.contentimg} />
            </div>

            <div class="fundo">
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
                
                <div class="curtidas">
                    <img src={props.likesrc}/>
                    <div class="texto">
                        Curtido por <strong>{props.liketext}</strong> e <strong>outras {props.likenumber} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};
