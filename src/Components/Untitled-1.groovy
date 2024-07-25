<div className='row mt-5' >
                                        <form onSubmit={handleSubmit}>
                                            <Accordion defaultActiveKey="0">
                                                {forms.map((form, index) => (
                                                    <Accordion.Item eventKey={index.toString()} key={index} >
                                                        <Accordion.Header >Add Multiple Question {index + 1}</Accordion.Header>
                                                        <Accordion.Body >

                                                            <div className='row'>
                                                                <div className='col-12 col-md-6 mt-5'>
                                                                    <label className='pb-2'>Choose Type Of Questions</label>
                                                                    <select
                                                                        className='inputts'
                                                                        name="Type"
                                                                        value={form.Type}
                                                                        onChange={(e) => handleInputChange(index, 'Type', e.target.value)}
                                                                    >
                                                                        <option value="">Select</option>
                                                                        <option value="Number of Easy Questions (1 Mark)">Number of Easy Questions (1 Mark)</option>
                                                                        <option value="Number of Medium Questions (2 Mark)">Number of Medium Questions (2 Mark)</option>
                                                                        <option value="Number of Hard Questions (4 Mark)">Number of Hard Questions (4 Mark)</option>
                                                                    </select>
                                                                </div>

                                                                <div className="col-12 col-md-6 mt-5">
                                                                    <label className="pb-2">Students Assign to Questions</label>
                                                                    <Select
                                                                        isMulti
                                                                        value={options.filter(option => form.studentId.includes(option.value))}
                                                                        name='studentId'
                                                                        onChange={(selectedOptions) => handleStudentSelection(selectedOptions, index)}
                                                                        options={options}
                                                                        components={animatedComponents}
                                                                        inputId="exampleFormControlSelect2"
                                                                    />
                                                                </div>

                                                                <div className='col-12 col-md-6 mt-5'>
                                                                    <label className='pb-2'>Category</label>
                                                                    <select
                                                                        className='inputts'
                                                                        name="CategoryId"
                                                                        value={form.CategoryId}
                                                                        onChange={(e) => handleInputChange(index, 'CategoryId', e.target.value)}
                                                                    >
                                                                        <option value="">Select</option>
                                                                        {category.map(cat => (
                                                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                                                        ))}
                                                                    </select>
                                                                </div>

                                                                <div className='col-12 col-md-6 mt-5'>
                                                                    <label className='pb-2'>Quiz</label>
                                                                    <select
                                                                        className='inputts'
                                                                        name="QuizzeId"
                                                                        value={form.QuizzeId}
                                                                        onChange={(e) => handleInputChange(index, 'QuizzeId', e.target.value)}
                                                                    >
                                                                        <option value="">--Select---</option>
                                                                        <option key={QuizzeFindOne.id} value={QuizzeFindOne.id}>{QuizzeFindOne.QuizzName}</option>
                                                                    </select>
                                                                </div>

                                                                <div className='col-12 col-md-6 col-lg-6 col-xl-6 mt-5'>
                                                                    <label className='pb-2'>Add a new question</label>
                                                                    <select
                                                                        className='inputts'
                                                                        name="videoselect"
                                                                        onChange={handleSelectQuestion}
                                                                    >
                                                                        <option value={''}>Add a new question</option>
                                                                        <option value={'Multiple_Choice'}>Multiple Choice</option>
                                                                        <option value={'Fill_in_the_Blank'}>Fill in the Blank</option>
                                                                        <option value={'Comprehension'}>Comprehension</option>
                                                                    </select>
                                                                </div>

                                                                <div className='col-12 mt-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
                                                                    <input
                                                                        type='text'
                                                                        className='inputts ints'
                                                                        placeholder='Type question here'
                                                                        name='Questions'
                                                                        value={form.Questions}
                                                                        onChange={(e) => handleInputChange(index, 'Questions', e.target.value)}
                                                                    />
                                                                </div>

                                                                {selectednewquestion === 'Fill_in_the_Blank' && (
                                                                    <div className='container mt-5'>
                                                                        <div className='row mt-5'>
                                                                            {['a', 'b', 'c', 'd'].map((option, idx) => (
                                                                                <div className='col-12 col-md-3 col-xl-3 col-lg-3' key={option}>
                                                                                    <div className='shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
                                                                                        <div className='d-flex iconss'>
                                                                                            <div>
                                                                                                <i className="fa-light fa-trash-alt crl"></i>
                                                                                            </div>
                                                                                            <div className='crls'>{option}</div>
                                                                                            <label className={`custom-radio ${selectedOption === option ? 'selected' : ''}`}>
                                                                                                <input
                                                                                                    type="radio"
                                                                                                    name="option"
                                                                                                    value={option}
                                                                                                    checked={selectedOption === option}
                                                                                                    onChange={(e) => handleOptionChange(e, index)}
                                                                                                />
                                                                                            </label>
                                                                                        </div>
                                                                                        <input
                                                                                            type='text'
                                                                                            className='inputts ints'
                                                                                            placeholder='Type answer here'
                                                                                            name={`Options${idx + 1}`}
                                                                                            value={form[`Options${idx + 1}`] || ''}
                                                                                            onChange={(e) => handleInputChange(index, `Options${idx + 1}`, e.target.value)}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                            <div className='col-12 col-md-6 col-xl-6 col-lg-6'></div>
                                                                            <div className='col-12 col-md-3 col-xl-3 col-lg-3'></div>
                                                                            <div className='col-12 col-md-3 col-xl-3 col-lg-3 d-flex'>
                                                                                <div className='inputts mt-3'>
                                                                                    <label>Answer:
                                                                                        <input name="Answer" value={form.Answer || ''} readOnly />
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}



                                                                {selectednewquestion === 'Multiple_Choice' && (
                                                                    <div className='row mt-5'>
                                                                        <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
                                                                            <a className='crans' onClick={() => setIsExpanded('single')}>Single Correct Answer</a>
                                                                            <a className='crans ml--10' onClick={() => setIsExpanded('multiple')}>Multiple Correct Answers</a>
                                                                        </div>

                                                                        {isExpanded === "multiple" && (
                                                                            <div className='row mt-5'>
                                                                                {['a', 'b', 'c', 'd'].map((option, index) => (
                                                                                    <div className='col-12 col-md-3 col-xl-3 col-lg-3' key={option}>
                                                                                        <div className='shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
                                                                                            <div className='d-flex iconss'>
                                                                                                <div>
                                                                                                    <i className="fa-light fa-trash-alt crl"></i>
                                                                                                </div>
                                                                                                <div className='crls'>{option}</div>
                                                                                                <label className={`custom-checkbox ${selectedOptions.includes(option) ? 'selected' : ''}`}>
                                                                                                    <input
                                                                                                        type="checkbox"
                                                                                                        name="optin"
                                                                                                        value={option}
                                                                                                        checked={selectedOptions.includes(option)}
                                                                                                        onChange={() => handleOptionSelect(option)}
                                                                                                    />
                                                                                                </label>
                                                                                            </div>
                                                                                            <input
                                                                                                type='text'
                                                                                                className='inputts ints'
                                                                                                placeholder='Type answer here'
                                                                                                name={`Options${index + 1}`}
                                                                                                value={form[`Options${index + 1}`] || ''}
                                                                                                onChange={(e) => handleInputChange(index, `Options${index + 1}`, e.target.value)}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                                <div className='col-12 col-md-6 col-xl-6 col-lg-6'></div>
                                                                                <div className='col-12 col-md-3 col-xl-3 col-lg-3'></div>
                                                                                <div className='col-12 col-md-3 col-xl-3 col-lg-3 d-flex mt-3'>
                                                                                    {selectedOptions.map(option => (
                                                                                        <div className='selected-option boxs' key={option}>
                                                                                            <div>{option}</div>
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        )}


                                                                        {isExpanded === "single" && (
                                                                            <div className='row mt-5'>
                                                                                {['a', 'b', 'c', 'd'].map((option, idx) => (
                                                                                    <div className='col-12 col-md-3 col-xl-3 col-lg-3' key={option}>
                                                                                        <div className='shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
                                                                                            <div className='d-flex iconss'>
                                                                                                <div>
                                                                                                    <i className="fa-light fa-trash-alt crl"></i>
                                                                                                </div>
                                                                                                <div className='crls'>{option}</div>
                                                                                                <label className={`custom-radio ${selectedOption === option ? 'selected' : ''}`}>
                                                                                                    <input
                                                                                                        type="radio"
                                                                                                        name="option"
                                                                                                        value={option}
                                                                                                        checked={selectedOption === option}
                                                                                                        onChange={(e) => handleOptionChange(e, index)}
                                                                                                    />
                                                                                                </label>
                                                                                            </div>
                                                                                            <input
                                                                                                type='text'
                                                                                                className='inputts ints'
                                                                                                placeholder='Type answer here'
                                                                                                name={`Options${idx + 1}`}
                                                                                                value={form[`Options${idx + 1}`] || ''}
                                                                                                onChange={(e) => handleInputChange(index, `Options${idx + 1}`, e.target.value)}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                                <div className='col-12 col-md-6 col-xl-6 col-lg-6'></div>
                                                                                <div className='col-12 col-md-3 col-xl-3 col-lg-3'></div>
                                                                                <div className='col-12 col-md-3 col-xl-3 col-lg-3 d-flex'>
                                                                                    <div className='inputts mt-3'>
                                                                                        <label>Answer:
                                                                                            <input name="Answer" value={form.Answer || ''} readOnly />
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </div>



                                                        </Accordion.Body>

                                                    </Accordion.Item>
                                                ))}
                                            </Accordion>
                                            <div className="col-3 mb-3 d-flex mt-3">
                                                <button type="submit" className="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                                                <button type="reset" className="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                                                <input type="hidden" />
                                            </div>
                                        </form>
                                       
                                    </div>