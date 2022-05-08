import Icon from "./Icon";

export default function FundoMobile () {
    const icones = [
        "home", 
        "search-outline", 
        "add-circle-outline",
        "heart-outline", 
        "person-outline"
    ];

    return (
        <div class="fundo-mobile">
           {icones.map((icon) => <Icon name={icon} />)}
        </div>
    );
};
