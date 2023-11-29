import {useState, useEffect} from 'react';

const withData = (WrappedComponent, apiUrl) => {
    return function WithDataComponent(props){
        const [data, setData] = useState([]);

        useEffect(()=>{
            async function fetchData(){
                try {
                    const response = await fetch(apiUrl);
                    const items = await response.json();
                    setData(items);
                } catch(error){
                    console.error(error);
                }
         
            }
 
            fetchData();
        }, []);

        return <WrappedComponent data={data} {...props}/>
        
    }
}

export default withData;