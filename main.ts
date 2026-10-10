function 前に進む () {
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 150)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 150)
}
function 押し込み () {
    for (let index = 0; index < 2; index++) {
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 150)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 150)
        basic.pause(100)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 150)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 150)
        basic.pause(500)
    }
}
let sonar_距離_1 = 0
motor.motorStop(motor.Motors.M1)
basic.forever(function () {
    basic.showNumber(sonar_距離_1)
})
basic.forever(function () {
    sonar_距離_1 = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.MicroSeconds
    )
})
basic.forever(function () {
    if (sonar_距離_1 <= 10) {
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 200)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 200)
        basic.pause(500)
        押し込み()
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 150)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 150)
        basic.pause(20000)
        control.reset()
    }
})
