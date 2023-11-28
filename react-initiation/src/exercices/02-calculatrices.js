// Ecrire un composant Calculatrice, en classe ou en fonction.
// Vous devez pouvoir additionner, soustraire et multiplier à l'aide de bouton.
// En Javascript, vous pouvez utiliser la fonction eval.
// Pour aller plus loin :
// Vous pouvez le faire de manière concise, c'est à dire avec un JSX de quelques lignes (10 lignes)

import React, { Component } from 'react';

// function Calculatrice(){
//     const [input, setInput] = useState("");
//     const [result, setResult] = useState("");

//     const handleButtonClick = (event) => {
//         const value = event.target.value;
//         if (value === "="){
//             try {
//                 const result = eval(input);
//                 setResult(result);
//             } catch (error){
//                 setResult(error.message);
//             }
//         } else if (value === "C"){
//             setInput("");
//             setResult("");
//         } else {
//             setInput(input + value);
//         }
//     }

//     return (
//         <div>
//             <input type="text" value={input} readOnly/>
//             <p>{result}</p>
//             {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', 'C', '='].map((value)=> 
//                 <button key={value} value={value} onClick={handleButtonClick}>{value}</button>
//             )}
//         </div>
//     )
// }

class Calculatrice extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            result: ''
        };
       
    }
    handleButtonClick = (event) => {
        const value = event.target.value;
        if (value === '='){
            try {
            const result = eval(this.state.input);
            this.setState({ result: result});
            } catch (error) {
                this.setState({result: error.message});
            }
        } else if (value === 'C') {
            this.setState({ input: '', result: ''})
        } else {
            this.setState({input: this.state.input + value});
        }
    }

    render() {
        const buttons = [];
        for (let i = 0; i < 10; i++){
            buttons.push(i);
        }
        buttons = buttons.concat(['*', '+', '-', 'C', '=']);
        console.log(buttons);

        return (
            <div>
                <input type="text" value={this.state.input}/>
                <p>{this.state.result}</p>
                {
                    buttons.map((value) => 
                    <button key={value} value={value} onClick={this.handleButtonClick}>{value}</button>
                    )
                }
            </div>
        )
    }
}
export default Calculatrice;