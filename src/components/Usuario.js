export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.imgsrc}/>
            <div class="texto">
            <strong>{props.username}</strong>
            {props.usertext}
            </div>
        </div>
    );
};
