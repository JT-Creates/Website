@echo OFF

:: BatchGotAdmin
:-------------------------------------
REM  --> Check for permissions
    IF "%PROCESSOR_ARCHITECTURE%" EQU "amd64" (
>nul 2>&1 "%SYSTEMROOT%\SysWOW64\cacls.exe" "%SYSTEMROOT%\SysWOW64\config\system"
) ELSE (
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"
)

REM --> If error flag set, we do not have admin.
if '%errorlevel%' NEQ '0' (
    echo Requesting administrative privileges...
    goto UACPrompt
) else ( goto gotAdmin )

:UACPrompt
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    set params= %*
    echo UAC.ShellExecute "cmd.exe", "/c ""%~s0"" %params:"=""%", "", "runas", 1 >> "%temp%\getadmin.vbs"

    "%temp%\getadmin.vbs"
    del "%temp%\getadmin.vbs"
    exit /B

:gotAdmin
    pushd "%CD%"
    CD /D "%~dp0"
:--------------------------------------
IF EXSIST "%windir%\battery_log\" (
    ECHO DIRECTIORY FOUND
) ELSE (
    ECHO CREATING %windir%\battery_log\
    mkdir %windir%\battery_log\
)
COLOR F4
echo ===============================================================
ECHO Battery logger 
echo ===============================================================
echo Select an option:
:USER_SELECTER
    Choice /C codq /N /M "[C]reate power log | [O]pen report | [D]elete log | [Q]uit"
    If ErrorLevel 4 GoTo :EOF
    If ErrorLevel 3 GoTo DELETE_LOG
    If ErrorLevel 2 GoTo SAVED_LOGS
    If ErrorLevel 1 GOTO REPORT_DATA
PAUSE
GOTO USER_SELECTER

:REPORT_DATA
cd /%userprofile%\desktop
powercfg -energy
PAUSE
GOTO USER_SELECTER

:SAVED_LOGS
cd /%windir%\battery_log
ECHO TREE
PAUSE
GOTO USER_SELECTER

:DELETE_LOG
ECHO SET /P Entry_name=log to be erased
ECHO delete %windir%\battery_log\%Entry_name%
PAUSE
GOTO USER_SELECTER