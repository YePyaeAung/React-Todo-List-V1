const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return (
        <>
          {/* Update Task */}
          <div className="row mb-5">
            <div className="col">
              <input
                className="form-control form-control-lg"
                value={ updateData && updateData.title }
                onChange={ (e) => changeTask(e) }
              />
            </div>
            <div className="col-auto">
              <button 
                className="btn btn-lg btn-info mr-20"
                onClick={ updateTask }
              >Update</button>
              <button 
                className="btn btn-lg btn-warning"
                onClick={ cancelUpdate }
              >Cancel</button>
            </div>
          </div>
        </>
    );
}

export default UpdateForm;