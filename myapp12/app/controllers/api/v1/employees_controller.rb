class Api::V1::EmployeesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @employees = Employee.all
    render json: @employees
  end

  def show
    @employee = Employee.find(params[:id])
    render json: @employee
  end

  def create
    @employee = Employee.create(employee_params)
    render json: @employee
  end

  def update
    @employee = Employee.find(params[:id])
    @employee.update(employee_params)
    render json: @employee
  end

  def destroy
    @employee = Employee.find(params[:id])
    for_response = @employee
    @employee.destroy
    render json: for_response
  end

  private
  def employee_params
    params.fetch(:employee, {}).permit(:first_name, :last_name)
  end
end
