import axios from 'axios';

export class arreglo{
    public data : any =[];
    public result : any = [];

    constructor(){
    }
    
    public async busqueda(){           
        let count : number = 1; 
        let id;        
        while(count<26){
               id = await this.getChuck(); 
               console.log(id);
               if(this.getCoincidencia(id)!=true){                    
                    this.result.push({id : id});
                    ++count;
               }
        }
        return this.result;
    }


    public getCoincidencia(id : any){            
        let x : number = 0;
        this.result.forEach((element : any)=> {
            if(id === element.id){
                return true
            }            
        });
        return false;
    }

    public async getChuck(){
            try {
              const { data, status } = await axios.get(
                'https://api.chucknorris.io/jokes/random',
                {
                  headers: {
                    Accept: 'application/json',
                  },
                },
              );                            
            return data.id;
            } catch (error) {
              if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
              } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
              }
            }
    }


}export default arreglo;