import STYLE from "./icon.m.scss";

const htmlTag: JQuery = $(`
    <div class="${STYLE.iconCredit}">
        Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a>
        from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>`);

$("body").append(htmlTag);
