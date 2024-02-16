import { PersonalAreaHeader } from "../../components/personalAreaHeader/personalAreaHeader";
import { AccountNew } from "../../components/accountNew/accountNew";
import "./personalArea.css";

export function PersonalArea(props) {
    return (
        <div className={"personal-area__wrapper"}>
            <PersonalAreaHeader/>
            <AccountNew />
        </div>
    );
}
