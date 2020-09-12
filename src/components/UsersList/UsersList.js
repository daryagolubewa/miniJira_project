import React from 'react';


class UsersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {this.props.users.map(item => (
                    <div> {item.name} </div>
                ))}
            </div>
        )
    }
}

export default UsersList;

// стилизовать список пользователей + вывести все данные
// выводить админа между пользователями
// стилизовать счётчик (менять цвет фона блока цифры)
// module.css
// обработчик onChange
// сверстать табличку