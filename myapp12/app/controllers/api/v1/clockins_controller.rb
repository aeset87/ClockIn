class Api::V1::ClockinsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @clockins = Clockin.all
    render json: @clockins
  end

  def show
      @clockins = Clockin.find(params[:id])
      render json:   @clockins
  end

  def create
      @clockins = Clockin.create(clockin_params)
      render json: @clockin
  end

  def update
    @clockins = Clockin.find(params[:id])
    @clockin.update(clockin_params)
    render json: @clockin
  end

  def destroy
    @clockins = Clockin.find(params[:id])
    for_response = @clockin
    @clockin.destroy
    render json: for_response
  end

  private
  def clockin_params
    params.fetch(:clockin, {}).permit(:date, :start, :end, :away_time, :total_work_time, :away_reason, :employee_id)
  end
end
