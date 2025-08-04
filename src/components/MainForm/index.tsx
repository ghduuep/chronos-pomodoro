import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { Input } from "../Input";

export function MainForm() {
  return (
    <form className="form" action="">
            <div className="formRow">
                <Input labelText="task" id="meuInput" type="text" placeholder="Digite sua tarefa" />
            </div>

            <div className="formRow">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="formRow">
                <Cycles />
            </div>

            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} />
            </div>
        </form>
  )
}