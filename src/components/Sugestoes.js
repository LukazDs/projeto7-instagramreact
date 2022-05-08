export default function Sugestoes() {

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
        ];

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestions.map(element => <Sugestao userimg={element.userImg} username={element.userName}/>)}

        </div>
    );
};

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
    );
};
