import React,{Component} from 'react';
import { StyleSheet, Text, View, Button ,TouchableOpacity} from 'react-native';

export default class App extends React.Component{
  constructor()
  {
      super()
      this.state={
        resultText:"",
        calculationText:''
      }
      this.operations=['Del','+','-','*','/']
  }

  calculateResult()
  {
  const text = this.state.resultText
  console.log(text,eval(text))
  //eval is special type has java script for calculations
   this.setState({
     calculationText:eval(text)
   })

  }
  validate()
  {
    const text = this.state.resultText
    switch(text.slice(-1))
    {
      case'+':
      case'-':
      case'*':
      case'/':
          return false

    }
    return true
  }

     buttonPressed(text)
      {
       console.log(text)
        if(text == 'Cal')
        { return this.validate() && this.calculateResult() }


        this.setState({
          resultText:this.state.resultText+text
        })
      }

  operate(operations)
  {
    switch(operations)
    {
      case 'Del':
            let text =this.state.resultText.split('')
            text.pop()
      
            this.setState({
              resultText:text.join('')
            })
            break
      case '+':
      case '-':
      case  '*':
      case '/':

      const lastChar=this.state.resultText.split('').pop()
      if(this.operations.indexOf(lastChar)>0) return
     
        if (this.state.text == "" ) return
        this.setState({
          resultText:this.state.resultText + operations
        })

      
    }
  }
  render()
  {   
    let rows =[]//declared empty array
    let nums =[[1,2,3],[4,5,6],[7,8,9],['.',0,"Cal"]]
    for(let  i=0;i< 4;i++)
    {
      let row =[]

      for(let j=0;j<3;j++)
      {
        row.push(<TouchableOpacity style={styles.btn}
                key={nums[i][j]}
                onPress={()=>this.buttonPressed(nums[i][j])}
                >
                       <Text  style={styles.btnText}>{nums[i][j]}</Text>
                </TouchableOpacity>)
      }
     rows.push(<View  key={nums[i]} style={styles.row}>{row}</View>)
    }
  
    let ops =[]
    for(let i=0;i<5;i++)
    {ops.push(<TouchableOpacity style={styles.btn}
               onPress={()=>this.operate(this.operations[i])}
               key={this.operations[i]}
              >
                   <Text  style={[styles.btnText,styles.btnWhite]}>{this.operations[i]}</Text>
              </TouchableOpacity>)
      }
    
    
    
    return (
      <View style={styles.container}>
        <View style={styles.result}>

        <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        

        <View  style={styles.calculation}>
            <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>

        <View  style={styles.buttons}>
            <View style={styles.numbers}>
                {rows}
            </View>
            <View style={styles.operations}>
                 {ops}
            </View>
         </View>
      
       
     </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  btn:{
    flex:1,
    alignItems:"center",
    alignSelf:"stretch",
    justifyContent:'center',
  },
  btnText:{
    fontSize:30,
    color:'white'
  },
  btnWhite:{
    color:"white"
  },
  result:{
    flex:1,
    backgroundColor:'white',
    alignContent:"center",
    alignItems:'flex-end',
    marginTop:200
  },
  resultText:{
    fontSize:30,
    color: 'black',
   
  },
  calculationText:{
    fontSize:24,
    color: 'black',
  },
  row:{
    flexDirection:"row",
    flex:1,
    alignItems:'center',
    justifyContent:'space-around',
  },
  calculation:{
    flex:1,
    backgroundColor:'white',
    alignContent:"center",
    alignItems:'flex-end',
    marginTop:0
  },
  buttons:
  { flex:6,
    flexDirection:'row',
    marginTop:40
  },
  numbers:{
    flex:3,
    backgroundColor:'#rgba(0, 0, 0, 0.87)',
    borderRadius:2
    
  },
  operations:{
    flex:1,
    backgroundColor:'#ec9649',
    justifyContent:'space-around',
 
  },

});
