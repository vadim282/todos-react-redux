import {connect} from 'react-redux';
import TodoAddForm from '../components/todo-add-form';
import {addList} from '../actions'

const mapDispatchToProps = {
    addList,
};

export default connect(null, mapDispatchToProps)(TodoAddForm);