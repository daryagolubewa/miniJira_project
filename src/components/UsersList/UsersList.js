import React from 'react';


class UsersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { users } = this.props;
        return (
            <div>
                { users.map(item => (
                    <div>
                        <div> {item.name} </div>
                        <div> {item.age} </div>
                        <div> {item.city} </div>
                    </div>
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