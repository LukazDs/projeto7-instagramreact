import Acoes from "./Acoes";

export default function Corpo() {

    function Esquerda() {

        function Story(props) {
            return (
                    <div class="story">
                        <div class="imagem">
                            <img src={props.img} />
                        </div>
                        <div class="usuario">
                            {props.name}
                        </div>
                    </div>
            )
        }

        function Stories() {

            const adress = [
                    {src:"./assets/img/9gag.svg", user: "9gag"},
                    {src:"./assets/img/meowed.svg", user: "meowed"},
                    {src:"./assets/img/barked.svg", user: "barked"},
                    {src:"./assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
                    {src:"./assets/img/wawawicomics.svg", user: "wawawicomics"},
                    {src:"./assets/img/respondeai.svg", user: "respondeai"},
                    {src:"./assets/img/filomoderna.svg", user: "filomoderna"},
                    {src:"./assets/img/memeriagourmet.svg", user: "memeriagourmet"},
                ];

            return (
                <div class="stories">
                
                    {adress.map((element) => (<Story img={element.src} name={element.user} />))}

                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>
            )
        }

        function Post(props) {

            // function LikePost() {
            //     setHeart("heart");
            //     setLike("red");
            //     if(heart === "heart") {
            //         setHeart("heart-outline");
            //         setHeart("black");
            //     }
            // }
                    
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
                        <img src={props.contentimg} />
                    </div>

                    <div class="fundo">
                        <Acoes />
                        
                        <div class="curtidas">
                            <img src={props.likesrc}/>
                            <div class="texto">
                                Curtido por <strong>{props.liketext}</strong> e <strong>outras {props.likenumber} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        function Posts() {

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
            ]

            return (
                <div class="posts">
                   {posts.map((element) => <Post userimg={element.userSrc} username={element.userName} contentimg={element.contentSrc} likesrc={element.likeSrc} likenumber={element.likeNumber}/>)}
                </div>
            )
        }

        return (
            <div class="esquerda"> 
                <Stories />
                <Posts />
            </div>
        )

    }

    function Sidebar() {

        function Usuario(props) {
            return (
                <div class="usuario">
                    <img src={props.imgsrc}/>
                    <div class="texto">
                    <strong>{props.username}</strong>
                    {props.usertext}
                    </div>
                </div>
            )

        }

        function Sugestao(props) {
            return (
                     <div class="sugestao">
                        <div class="usuario">
                            <img src={props.userimg} />
                            <div class="texto">
                                <div class="nome">{props.username}</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>
            )
        }

        function Sugestoes() {

            const suggestions = 
                [
                    {
                        userImg: "./assets/img/bad.vibes.memes.svg",
                        userName: "bad.vibes.memes",
                    },
                    {
                        userImg: "./assets/img/chibirdart.svg",
                        userName: "chibirdart",
                    },
                    {
                        userImg: "./assets/img/razoesparaacreditar.svg",
                        userName: "razoesparaacreditar",
                    },
                    {
                        userImg: "./assets/img/adorable_animals.svg",
                        userName: "adorable_animals",
                    },
                    {
                        userImg: "./assets/img/smallcutecats.svg",
                        userName: "smallcutecats",
                    },
                ]

            return (
                <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>

                    {suggestions.map(element => <Sugestao userimg={element.userImg} username={element.userName}/>)}

                </div>
            )
        }

        function Links() {
            return (
                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>
            )

        }

        function Copyright() {
            return (
                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            )

        }
        return (
            <div class="sidebar">
                <Usuario imgsrc="./assets/img/catanacomics.svg" username="catanacomics" usertext="Catana" />
                <Sugestoes />
                <Links />
                <Copyright />
            </div>
        )
    }

    return (
        <div class="corpo">
            <Esquerda />
            <Sidebar />    
        </div>
    )
}