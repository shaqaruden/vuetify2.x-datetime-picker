# vuetify2.x-datetime-picker

A Vuetify Date/Time Picker made from existing Vuetify Components. More props will be added for greater flexibility.
## Install
```shell
npm install vuetify2.x-datetime-picker --save

or

yarn add vuetify2.x-datetime-picker
```

## Usage

```javascript
import VDateTimePicker from 'vuetify2.x-datetime-picker'

...

Vue.use(VDateTimePicker)
```

```html
<v-datetime-picker @save="saveMethod" label="Date/Time Picker" v-model="datetime" filled></v-datetime-picker>
```

## Props
|     Name    |   Type  |   Default Value  |                Description               |
| ----------- | ------- | ---------------- | ---------------------------------------- |
|  dateFormat |  String |    YYYY-MM-DD    |             Format of the date.          |
|  timeFormat |  String |       HH:mm      |             Format of the time           |
| pickerWidth |  String |        290       |      Width of the both pickers in px     |
|    label    |  String | Date/Time Picker |  Label that display as part of the input |
|    icon     |  String |       event      | icon that displays beside the text field |
|    filled   | Boolean |      false       | Applies the alternate filled input style |

## Events 
|    Name     |    Arguments            |       Description              |
| ----------- | ----------------------- | ------------------------------ |
| input       | value (Date/String)     | The updated bound model        |
| save        | value (Datetime/String) | Emmited when completing picker |
