export default function Stories() {

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
    );
};

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
    );
};
