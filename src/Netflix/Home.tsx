import React, { ReactNode } from "react";
import { View, StyleSheet, ImageBackground, Text, Button } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { addToDo } from "../feature/todoList";
import { TextInput } from 'react-native-gesture-handler';


export default function Home() {

    const [text, setText] = useState<any>('');

    const dispatch = useDispatch()

    const { todos } = useSelector((state: any) => state.todos)


    function handleSubmit() {

        dispatch(addToDo(text))
        setText("")
        console.log(text)

    }


    return (

        <View style={Style.Container}>

            <View style={Style.Child} >

                <ImageBackground source={require('../Assets/sneakers.png')} style={Style.logo} resizeMode='contain' />

            </View>

            <View>

                <TextInput placeholder="Todo" value={text.content} onChangeText={setText} style={{ color: '#ffffff' }} placeholderTextColor="#ffffff" />
                <Button title="ADD" onPress={handleSubmit} />

            </View>


            <View>

                <Text >{todos}</Text>
                <Text style={{ color: '#ffffff' }}> Todo List:</Text>

                {todos?.map((id: any, content: any) => {

                    console.log('index', content)
                    return (

                        <Text key={id} style={{ color: '#ffffff' }}>
                            {content}
                        </Text>
                    )
                })
                }

            </View>

        </View >
    )
}

// import React, { ReactNode } from "react";
// import { View, StyleSheet, ImageBackground, Text, Button } from 'react-native';
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from 'react';
// import { addToDo } from "../feature/todoList";
// import { TextInput } from 'react-native-gesture-handler';
// import { deleteToDo, editTodo } from '../feature/todoList';


// export default function Home() {

//     const [text, setText] = useState<string>()
//     const [isEditing, setEditing] = useState(false);
//     const [state, setState] = useState({
//         id: '', content: '', contentError: ''
//     });

//     const dispatch = useDispatch()

//     const todos = useSelector((state: any) => state.toDo)

//     console.log('todo', todos)


//     const handleChange = (e: { target: { name: any; value: any; }; }) => {
//         setState({
//             ...state, [e.target.name]: e.target.value,
//             [`${e.target.name}Error`]: null
//         });
//     }


//     const { content, contentError, id } = state;

//     const onEditToggle = (id: any, content: any) => {
//         setEditing(true);
//         setState({ ...state, id, content });
//     }

//     const edit = () => {
//         if (content === '') {
//             setState({ ...state, contentError: 'You must write something!' });
//             return;
//         }
//         dispatch((editTodo({ content, id })));
//         setEditing(false);
//     }

//     return (
//         <View style={Style.Container}>

//             <View style={Style.Child} >

//                 <ImageBackground source={require('../Assets/sneakers.png')} style={Style.logo} resizeMode='contain' />

//             </View>

//             <View style={{}}>

//                 {todos?.map((id: React.Key | null | undefined, content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => {
//                     return (
//                         <View key={id}>
//                             <Text>{content}</Text>

//                             <Button title="delete"
//                                 onPress={() => dispatch(deleteToDo({ id }))}
//                             />
//                             <Button title="edit"
//                                 onPress={() => onEditToggle(id, content)}
//                             />

//                         </View>
//                     )
//                 })}



//             </View>
//         </View >

//     )
// }




const Style = StyleSheet.create({

    Container: {

        flex: 1,
        backgroundColor: '#121c47',
    },

    Child: {

        flex: 2,
        backgroundColor: '#96e5e8',
        maxHeight: '40%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    logo: {

        top: '10%',
        height: 250,
    },

})
