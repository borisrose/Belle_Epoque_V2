export default function (data: any, template: (d: string) => void) {
  return `
            <ul class="list custom-list">
                ${data.map((el: any) => template(el))}
            <ul> 
        `;
}
